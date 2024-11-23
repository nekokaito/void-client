
const Accordion = () => {
     return (
          <div className='flex flex-col px-4 gap-2 lg:w-1/2 mx-auto'>
               <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What industries does Void Tech serve?</div>
                    <div className="collapse-content">
                         <p>Highlight the sectors or clients you cater to.</p>
                    </div>
               </div>
               <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How can I buy products from Void Tech?</div>
                    <div className="collapse-content">
                         <p>Describe the purchasing process (online store, direct contact, etc.).</p>
                    </div>
               </div>
               <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How can I get technical support?</div>
                    <div className="collapse-content">
                         <p>Support channels (email, live chat, etc.).</p>
                    </div>
               </div>
          </div>
     );
};

export default Accordion;