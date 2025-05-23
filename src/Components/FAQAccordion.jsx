import React from 'react';

const FAQAccordion = () => {
    const faqs = [
        {
            question: "How do I find a compatible roommate?",
            answer:
                "You can browse listings based on preferences like budget, location, lifestyle, and interests. Our smart matching algorithm also suggests roommates who share similar habits and routines.",
        },
        {
            question: "Are the listings and users verified?",
            answer:
                "Yes. All user profiles and listings go through a verification process including ID checks and optional social profile linking for increased trust.",
        },
        {
            question: "Can I message a potential roommate before connecting?",
            answer:
                "Absolutely. You can send a message request, and once accepted, start chatting directly in your dashboard to learn more about each other.",
        },
        {
            question: "Is there any cost to use the platform?",
            answer:
                "Basic features are free. Premium plans offer boosted visibility, advanced filtering, and unlimited messaging for a small monthly fee.",
        },
        {
            question: "How do I remove my listing or deactivate my profile?",
            answer:
                "Go to your account settings and select 'Deactivate Profile' or 'Remove Listing'. You can reactivate it anytime if your search resumes.",
        },
    ];
    return (
        <div>
            <div className="max-w-3xl mx-auto my-10 p-4">
                <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <div key={index} className="collapse collapse-arrow bg-base-200">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium">
                                {faq.question}
                            </div>
                            <div className="collapse-content  ">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQAccordion;