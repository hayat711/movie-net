import CastCard, { ICastCard } from '@/components/cast/CastCard';
import { IMovieCard } from '../index';
import {useCasts} from "@/hooks/useMovie";
import {useRouter} from "next/router";

interface IParamsCasts {
    params: {
        id: IMovieCard['id'];
    };
}


const Movie =  ({ params }: IParamsCasts) => {
    const router = useRouter();
    const movieId = typeof router.query?.id === 'string' ? parseInt(router.query.id) : null;

    //@ts-ignore
    const { data : movieCast, isLoading, isFetching} = useCasts(movieId);


    return (
        <main className='mt-5 flex flex-col mb-6'>
            <div className='w-[1200px] max-w-full px-4 mx-auto'>
                <div className='flex flex-col mb-6 mt-6'>
                    <h1 className='text-2xl font-medium'>All Cast</h1>
                </div>
                <div className='grid grid-cols-4 mt-4 gap-4'>
                    {movieCast?.map((cast: ICastCard) => (
                        <CastCard key={cast?.id} cast={cast} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Movie;
