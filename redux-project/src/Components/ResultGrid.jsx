import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos, fetchVideos } from "../api/mediaApi.js"
import { setLoading, setError, setResults } from "../redux/features/searchSlice.js"
import { useEffect } from "react";
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
    const dispatch = useDispatch();

    useEffect(function () {
        if (!query) return
        const getData = async () => {

            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    console.log(response.videos)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'videos',
                        title: item.user.name || "videos",
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }))
                }

                dispatch(setResults(data));
            }
            catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData();
    }, [query, activeTab, dispatch])


    if (error) return <h1> Error </h1>
    if (loading) return <h1> Loading... </h1>

    return (

        <div className="flex h-[80%] w-full  justify-between flex-wrap py-5 gap-2 rounded overflow-auto  " >
            {results.map((item, idx) => {
                return <div key={idx}>
                    < ResultCard item={item} />
                </div>
            })}
        </div>

    )
};

export default ResultGrid;
