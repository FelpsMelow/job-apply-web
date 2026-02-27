"use client";

import type { ComponentType } from "react";
import { useEffect, useMemo, useState } from "react";
import stories from "./stories";
import {
  PlaygroundStory,
  PlaygroundSection,
  getStorySection,
} from "./types";
import "./ui-playground.scss";

const orderedSections: PlaygroundSection[] = ["Atoms", "Molecules", "Organisms"];

function filterStories(list: PlaygroundStory[], query: string) {
  if (!query.trim()) return list;
  const term = query.toLowerCase();
  return list.filter((story) => {
    const haystack = [
      story.title,
      story.componentName,
      story.description ?? "",
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(term);
  });
}

function UsageList({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="usage-block">
      <h4>{title}</h4>
      <ul>
        {items.map((item, idx) => (
          <li key={`${title}-${idx}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function UIPlaygroundPage() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => filterStories(stories, search), [search]);
  const [selectedId, setSelectedId] = useState<string>(filtered[0]?.id ?? "");
  const [showAll, setShowAll] = useState(false);
  const [openSections, setOpenSections] = useState<Record<PlaygroundSection, boolean>>({
    Atoms: true,
    Molecules: true,
    Organisms: true,
    Other: true,
  });

  useEffect(() => {
    if (!filtered.find((story) => story.id === selectedId)) {
      setSelectedId(filtered[0]?.id ?? "");
    }
  }, [filtered, selectedId]);

  const grouped = useMemo(() => {
    return orderedSections.map((section) => ({
      section,
      items: filtered.filter(
        (story) => getStorySection(story.title) === section
      ),
    }));
  }, [filtered]);

  const selectedStory =
    filtered.find((story) => story.id === selectedId) ?? filtered[0];

  const excludedOnShowAll = new Set<string>(["atoms-overlay", "molecules-modal"]);

  const visibleStories: PlaygroundStory[] = showAll
    ? filtered.filter((story) => !excludedOnShowAll.has(story.id))
    : selectedStory
    ? [selectedStory]
    : [];

  return (
    <div className="ui-playground">
      <aside className="ui-playground__sidebar">
        <div className="sidebar__header">
          <h2>UI Playground</h2>
          <p>Stories internas para atoms, molecules e organisms.</p>
        </div>
        <input
          className="sidebar__search"
          placeholder="Buscar por título ou componente"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="sidebar__groups">
          {grouped.map(({ section, items }) =>
            items.length ? (
              <div key={section} className="sidebar__group">
                <button
                  type="button"
                  className="sidebar__group-header"
                  onClick={() =>
                    setOpenSections((prev) => ({
                      ...prev,
                      [section]: !prev[section],
                    }))
                  }
                >
                  <span>{section}</span>
                  <span className="sidebar__group-icon">
                    {openSections[section] ? "−" : "+"}
                  </span>
                </button>
                {openSections[section] && (
                  <ul className="sidebar__list">
                    {items.map((story) => (
                      <li
                        key={story.id}
                        className={
                          selectedId === story.id
                            ? "sidebar__item sidebar__item--active"
                            : "sidebar__item"
                        }
                        onClick={() => setSelectedId(story.id)}
                      >
                        <div className="sidebar__item-title">{story.title}</div>
                        <div className="sidebar__item-subtitle">
                          {story.componentName}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null
          )}
          {!filtered.length && (
            <div className="sidebar__empty">Nenhuma story encontrada.</div>
          )}
          <div className="sidebar__footer">
            <label className="toggle-all">
              <input
                type="checkbox"
                checked={showAll}
                onChange={(e) => setShowAll(e.target.checked)}
              />
              <span>Renderizar todos</span>
            </label>
            <button
              type="button"
              className="sidebar__home"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Ir para Home
            </button>
          </div>
        </div>
      </aside>

      <main className="ui-playground__content">
        {visibleStories.length ? (
          visibleStories.map((story) => (
            <article className="story-block" key={story.id}>
              <header className="content__header">
                <div>
                  <p className="content__eyebrow">{story.title}</p>
                  <h1>{story.componentName}</h1>
                  {story.description && (
                    <p className="content__description">
                      {story.description}
                    </p>
                  )}
                </div>
              </header>

              <section className="content__usage">
                <UsageList title="Quando usar" items={story.usage.whenToUse} />
                <UsageList
                  title="Evitar quando"
                  items={story.usage.avoidWhen}
                />
                <UsageList title="Regras" items={story.usage.rules} />
                <UsageList title="A11y" items={story.usage.a11y} />
                <UsageList
                  title="Edge cases"
                  items={story.usage.edgeCases}
                />
              </section>

              <section>
                <div className="section__header">
                  <h3>Variants</h3>
                  <p>Todos os estados relevantes do componente.</p>
                </div>
                <div
                  className={`variants-grid ${
                    story.id === "organisms-task-card"
                      ? "variants-grid--taskcard"
                      : ""
                  }`}
                >
                  {story.variants.map((variant) => {
                    const VariantComponent = variant.render as ComponentType;
                    return (
                      <div className="variant-card" key={variant.id}>
                        <div className="variant-card__header">
                          <div>
                            <h4>{variant.name}</h4>
                            {variant.description && (
                              <p className="variant-card__description">
                                {variant.description}
                              </p>
                            )}
                          </div>
                          {variant.tags?.length ? (
                            <div className="variant-card__tags">
                              {variant.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                        <div className="variant-card__preview">
                          <VariantComponent />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {story.contexts?.length ? (
                <section>
                  <div className="section__header">
                    <h3>Contextos reais</h3>
                    <p>Como o componente se comporta em cenários compostos.</p>
                  </div>
                  <div className="contexts-grid">
                    {story.contexts.map((context) => {
                      const ContextComponent = context.render as ComponentType;
                      return (
                        <div className="context-card" key={context.title}>
                          <h4>{context.title}</h4>
                          {context.description && (
                            <p className="context-card__description">
                              {context.description}
                            </p>
                          )}
                          <div className="context-card__preview">
                            <ContextComponent />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ) : null}
            </article>
          ))
        ) : (
          <div className="content__empty">
            Nenhuma story encontrada para a busca.
          </div>
        )}
      </main>
    </div>
  );
}
