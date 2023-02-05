import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'pzc72vti',
	dataset: 'production',
	apiVersion: '2023-01-30',
	useCdn: false
});

export async function load({ params }) {
	const data = await client.fetch(`*[_type == "conference"][0]{_id,
    title,
    description,
    location,
    venue,
    startDate,
    endDate,
    'talkCount': count(*[_type == 'talk']),
    'speakerCount': count(*[_type == 'speaker']),
    'days': *[_type == 'day'] | order(date asc)
    {
      _id,
      title,
      description,
      date,
      'talks': *[_type == 'talk' && references(^._id)] | order(time asc)
      {
          _id,
          title,
          time,
          'speaker': speaker->name,   
      },
      'speakers': *[_type == 'speaker' && _id in *[_type == 'talk' && references(^.^._id)].speaker._ref]
      {
          name,
          title,
          'imageUrl': image.asset->url
      }
  }
  }`);

	if (data) {
		return { conference: data };
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
