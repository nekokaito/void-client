
const Accordion = () => {
     return (
          <div className='flex flex-col px-4 gap-2 lg:w-1/2 mx-auto'>
               <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                         <p>hello</p>
                    </div>
               </div>
               <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                         <p>hello</p>
                    </div>
               </div>
               <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                         <p>hello</p>
                    </div>
               </div>
          </div>
     );
};

export default Accordion;