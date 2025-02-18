
const Blogs = () => {
    const articles = [
        {
            id: "1",
            title: "💍 The Foundations of a Strong Relationship",
            description: "Building a strong and lasting relationship requires patience, trust, and mutual understanding. A relationship is like a plant – it needs constant care, effort, and love to flourish.",
            content: (
                <>
                    <h2 className="text-2xl font-semibold mt-6 dark:text-slate-300">🔹 Key Elements of a Healthy Relationship</h2>
                    <p className="mt-4">Every relationship is unique, but the following core elements help in maintaining a successful and fulfilling connection:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li><strong>Trust:</strong> The foundation of any strong relationship. Without trust, love cannot grow.</li>
                        <li><strong>Communication:</strong> Open and honest conversations help in resolving conflicts and strengthening the bond.</li>
                        <li><strong>Respect:</strong> A relationship thrives when both partners respect each other's opinions, space, and emotions.</li>
                        <li><strong>Commitment:</strong> Staying loyal and dedicated helps build a relationship that stands the test of time.</li>
                        <li><strong>Compromise:</strong> No two individuals are the same. Compromising and adjusting are key to a happy relationship.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">🧠 What Wise People Say About Relationships</h2>
                    <blockquote className="mt-4 border-l-4 border-pink-500 pl-4 italic text-gray-700 dark:text-slate-400">
                        "A great relationship is about two things: first, appreciating the similarities, and second, respecting the differences." – Anonymous
                    </blockquote>
                    <blockquote className="mt-4 border-l-4 border-pink-500 pl-4 italic text-gray-700 dark:text-slate-400">
                        "Love is not about possession. It’s all about appreciation." – Osho
                    </blockquote>
                    <blockquote className="mt-4 border-l-4 border-pink-500 pl-4 italic text-gray-700 dark:text-slate-400">
                        "Happiness in marriage is not something that just happens. A good marriage must be created." – Fawn Weaver
                    </blockquote>

                    <h2 className="text-2xl font-semibold mt-6">💡 Tips for a Happy Marriage</h2>
                    <p className="mt-4">A successful marriage isn’t about finding the perfect partner but learning to see an imperfect person perfectly. Here are some golden tips:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li><strong>Never stop communicating:</strong> Express love, gratitude, and concerns openly.</li>
                        <li><strong>Spend quality time together:</strong> The best way to strengthen a bond is by sharing experiences.</li>
                        <li><strong>Don’t let small fights ruin your day:</strong> Learn to forgive and move on.</li>
                        <li><strong>Keep romance alive:</strong> Surprise your partner with little gestures of love.</li>
                        <li><strong>Be patient and understanding:</strong> Marriage is a lifelong journey; be patient and kind.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "2",
            title: "❤️ Signs That Show You Are Ready for Marriage",
            description: "Marriage is a life-changing commitment, and being truly ready involves emotional, financial, and mental preparedness.",
            content: (
                <>
                    <h2 className="text-2xl font-semibold mt-6">🔹 How Do You Know You’re Ready?</h2>
                    <p className="mt-4">Many people wonder if they are truly ready for marriage. Here are some signs:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>You are emotionally mature and can handle conflicts without losing control.</li>
                        <li>You and your partner share similar values and future goals.</li>
                        <li>You have developed strong trust and open communication.</li>
                        <li>You’re financially responsible and stable.</li>
                        <li>You can imagine growing old with your partner, and that thought excites you.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">🧠 Wise Words on Marriage</h2>
                    <blockquote className="mt-4 border-l-4 border-pink-500 pl-4 italic dark:text-slate-400 text-gray-700">
                        "Marriage is not just spiritual communion; it is also remembering to take out the trash." – Joyce Brothers
                    </blockquote>
                    <blockquote className="mt-4 border-l-4 border-pink-500 dark:text-slate-400 pl-4 italic text-gray-700">
                        "A happy marriage is the union of two good forgivers." – Robert Quillen
                    </blockquote>

                    <h2 className="text-2xl font-semibold mt-6">💡 Marriage Preparation Tips</h2>
                    <p className="mt-4">Before saying "I do," consider these tips:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Discuss expectations about career, family, and responsibilities.</li>
                        <li>Work on emotional intelligence to handle disagreements better.</li>
                        <li>Seek premarital counseling to strengthen your relationship.</li>
                        <li>Ensure that both of you are equally committed and willing to put in the effort.</li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <div className="pt-24 px-5">
            {
                articles.map((article) =>(
                    <div key={article.id} className="lg:max-w-5xl w-full mx-auto py-12">
                <h1 className="text-3xl font-bold dark:text-slate-300 text-gray-800">{article.title}</h1>
                <p className="text-gray-600 dark:text-slate-400 mt-4">{article.description}</p>
                {article.content}
            </div>
                ) )
            }
        </div>
    );
};

export default Blogs;