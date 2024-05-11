

const CreationTips = () => {
    return (
        <div className="bg-[#ddd0b0] text-center py-10">
            <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold text-center">Content Creation Tips</h2>
            <p className="my-5 text-gray-600 text-center">The goal is to uncover unique angles, insights, or solutions that resonate with <br /> your audience and set your blog apart from others in your niche.</p>
            <div className="join join-vertical mx-auto w-[1000px] container ">
                <div className="collapse collapse-arrow join-item border border-black bg-[#1C4C5C]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl text-white font-medium">
                    Brainstorming Creative Content Ideas:
                    </div>
                    <div className="collapse-content text-gray-200">
                        <p>Start by understanding your audiences interests, pain points, and preferences.</p>
                        <p>Research trending topics in your niche using tools like Google Trends, BuzzSumo, or social media platforms.</p>
                        <p>Experiment with different content formats such as lists, how-to guides, case studies, or opinion pieces.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-black bg-[#1C4C5C]">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl text-white  font-medium">
                    Writing Compelling Headlines:
                    </div>
                    <div className="collapse-content text-gray-200">
                        <p>Use attention-grabbing words and phrases to pique curiosity and entice readers to click</p>
                        <p>Keep headlines clear, concise, and relevant to the content of your blog post</p>
                        <p>Incorporate power words that evoke emotion or convey a sense of urgency.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-black bg-[#1C4C5C]">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl text-white  font-medium">
                    Structuring Engaging Blog Posts:
                    </div>
                    <div className="collapse-content text-gray-200">
                        <p>Start with a captivating introduction that hooks readers and sets the tone for the rest of the post.</p>
                        <p>Organize your content into logical sections with descriptive subheadings to improve readability and navigation.</p>
                        <p>Use bullet points, numbered lists, and visuals to break up text and make key points stand out.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreationTips;