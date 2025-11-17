import React from "react";

export default function ProjectCard({ project }){
	const { title, description, screenshots = [], url, github, date, tags = [] } = project || {};
	const image = screenshots && screenshots[0] && screenshots[0].url;

	return (
		<article className="bg-white/5 border border-white/5 rounded-lg overflow-hidden shadow-sm">
			{image && (
				<img src={image} alt={screenshots[0].caption || title} className="w-full h-44 object-cover" />
			)}
			<div className="p-4">
				<h3 className="text-xl font-medium mb-1">{title}</h3>
				<p className="text-sm text-muted-foreground mb-3">{description}</p>
				<div className="flex flex-wrap gap-2 mb-3">
					{tags.map((t) => (
						<span key={t} className="text-xs px-2 py-1 bg-white/3 rounded">{t}</span>
					))}
				</div>
				<div className="flex items-center justify-between text-sm">
					<div className="text-muted-foreground">{date}</div>
					<div className="flex gap-3">
						{github && (
							<a href={github} target="_blank" rel="noreferrer" className="underline">Code</a>
						)}
						{url && (
							<a href={url} target="_blank" rel="noreferrer" className="underline">Live</a>
						)}
					</div>
				</div>
			</div>
		</article>
	)
}