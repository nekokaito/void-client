import { RotateLoader } from "react-spinners";


const Loading = () => {
     return (
          <div className="min-h-screen min-w-screen flex items-center justify-center">
               <RotateLoader
                    color="#b491f4"
                    size={20}
               />
          </div>
     );
};

export default Loading;