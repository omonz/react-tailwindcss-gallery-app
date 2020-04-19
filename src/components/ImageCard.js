import React from 'react';


const ImageCard = ({image}) => {
    // const download = response.headers.get("content-disposition")
    const tags = image.tags.split(',');
    return (
        <div>
            <div className="max-w-sm rounded-lg  mb-2 overflow-hidden shadow-lg bg-white">
               
            <img src={image.webformatURL} alt="" className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo By: {image.user}
                </div>
                <ul>
                <li><strong>Views: {image.views}</strong></li>
                <li><strong>Downloads: {image.downloads}</strong></li>
                <li><strong>Likes: {image.likes}</strong></li>
                </ul>
            </div>
            <div className="flex">
            <div className="py-4 px-6">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-300 rounded-full font-semibold px-3 py-1 text-sm text-gray-900 mr-2">
                    #{tag}
                    </span>
                ))}
            </div>
            <div className="py-2 px-6">
                <a href={image.webformatURL} title="CLick to Download" className="bg-teal-700 text-white py-1 rounded px-3"> <i class="fa fa-download" aria-hidden="true" download></i></a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default ImageCard
