import React from 'react';
import Head from '../Helper/Head';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFecth from '../../Hooks/useFecth';
import { STATS_GET } from '../../api';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFecth();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />

  if (error) return <Error />

  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title='My Stats' />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
}

export default UserStats;