import React from 'react';
import '../css/Experience.css';

const experiences = [
    {
        role: 'Quality Assurance & Testing Engineer',
        company: 'DEVCON LAGUNA (Non-profit Org)',
        period: 'JUNE 2026 // CURRENT',
        status: 'ACTIVE',
        badge: '/projectsPic/devcon.webp',
        tags: ['Postman', 'CI/CD', 'GitHub Actions', 'Agile'],
    },
];

export default function Experience() {
    return (
        <section className="experience-section" id="experience">
            <div className="experience-heading">
                <h2 className="experience-title">CAREER LOG</h2>
                <span className="experience-count">
                    {String(experiences.length).padStart(2, '0')} BADGE{experiences.length === 1 ? '' : 'S'}
                </span>
            </div>

            <div className="experience-list">
                {experiences.map((job, index) => (
                    <article className="work-badge" key={index}>
                        <img
                            className="work-badge-icon"
                            src={job.badge}
                            alt={`${job.company} logo`}
                        />

                        <div className="work-badge-body">
                            <div className="work-badge-meta">
                                <span className="work-badge-status">
                                    <span className="work-badge-status-dot" />
                                    {job.status}
                                </span>
                                <span className="work-badge-period">{job.period}</span>
                            </div>

                            <h3 className="work-badge-role">{job.role}</h3>
                            <p className="work-badge-company">{job.company}</p>

                            <div className="work-badge-tags">
                                {job.tags.map((tag, i) => (
                                    <span className="work-badge-tag" key={i}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
