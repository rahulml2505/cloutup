import Status from './Status';
import MakePost from './makepost';
import FeedPost from './feedpost';

const Feed = () => {
  return (
    <div className="justify-center md:w-2/3 mx-auto px-2 md:px-8 overflow-y-scroll scrollbar-hide">

	  <div className="flex mt-2.5 space-x-2">
	    <Status
	      userSrc="/avatars/rahul.gif"
	      statusSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfWYBaBINACjw0Bmi1eFp4q9rHjZ5xnGRTQ&usqp=CAU">
		  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 472.615 472.615"
		    className="absolute h-10 ml-6 mt-11 text-white hover:text-gray-200 z-[2]"
		    fill="currentColor" xmlSpace="preserve"> <g> <g> <polygon points="246.154,226.462 246.154,0 226.462,0 226.462,226.462 0,226.462 0,246.154 226.462,246.154 226.462,472.615 246.154,472.615 246.154,246.154 472.615,246.154 472.615,226.462 		"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
		  </svg>
		</Status>

	    <Status
	      userSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEw9SbR0vDPRlODfN41Dcy0e8AbmUI_CouA&usqp=CAU"
          statusSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxf-x5pEfGLjKal9WNa4HPo_Nhi2rPgoGOg&usqp=CAU"
        />
      </div>

      <MakePost/>

	  <div className="py-4 space-y-4">
	    <FeedPost
	      userimg="/avatars/rahul.gif"
	      username="Rahul Mondal"
	      text={
	      	<p>Rahul in Sunset</p>
	      }
	      imgSrc="https://scontent.fccu13-1.fna.fbcdn.net/v/t1.6435-9/151236903_765893930976647_5121733961730598344_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=108&ccb=1-5&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=j8R4HZwsG40AX-qVios&tn=-3sBOK8cxRYAb2Pj&_nc_ht=scontent.fccu13-1.fna&oh=00_AT9jWpRhRzbD0xqeHURAy3hI_0p3P6o-DlHPrB4arzHkTg&oe=627421BC"
	    />
	  </div>
    </div>
  );
}

export default Feed;
