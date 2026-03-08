# CLAUDE.md — src/posts/

All MDX content files for the blog. Gatsby auto-routes every `.mdx` file here as a page (via `gatsby-plugin-page-creator`).

## File Types

| Pattern | Category | Purpose |
|---------|----------|---------|
| `YYYY-MM-DD-slug.mdx` | `post` | Dated blog posts (appear in /blog listing) |
| `project-*.mdx` | `project` | Project showcase pages (appear in /project listing) |
| `home.mdx` | — | Homepage content with custom layout |
| `about.mdx` | — | About page with custom layout |

## Frontmatter Reference

### Blog Posts (`category: post`)

```yaml
---
category: post
title: "Post Title"
date: "YYYY-MM-DD"
visible: 1          # 1 = show on blog listing, 0 = hidden/draft
size: 4             # optional display size hint (used by UI)
titleImage: ../images/blog/YYYY/image.jpg  # optional card thumbnail
---
```

### Project Pages (`category: project`)

```yaml
---
category: project
title: "Project Title"
date: "YYYY-MM-DD"
titleImage: "../images/project/..."    # optional thumbnail
view: blog          # optional: also show this project on /blog listing
fullHeight: true    # optional: full-height card display
resources:          # optional: external links shown on project card
    - github:
        res: "https://github.com/..."
        desc: Github Page
    - link:
        res: "/related-blog-post-slug"
        desc: "Related Post"
    - zip:
        res: "project/folder/file.zip"
        desc: Description
---
```

### Special Pages (home.mdx, about.mdx)

These use a custom layout exported at the bottom and do **not** use the default MDX layout:

```yaml
---
layout: home        # or "about"
title: Home
order: 1            # nav ordering
---
```

Must export a custom default at the bottom:

```jsx
export default (props) => {
return (<Layout {...props} icon="home"/>)  // icon: "home", "info", etc.
}
```

## Blog Listing Filter

A post appears on `/blog` if **all** of these are true:
- `frontmatter.date` is set
- `category === "post"` **OR** `view === "blog"`
- `visible` is truthy (1)

Set `visible: 0` to keep a post routable but hidden from the blog listing (draft mode).

## MDX Patterns

### Basic post (no special imports)

Frontmatter + standard Markdown. The default layout (`posts-layout.js`) is applied automatically.

### Embedding interactive demos

Use `@loadable/component` via the `src/adhoc/` barrel files — required to prevent SSR crashes for canvas/WebGL code:

```mdx
import {SimonSpriteDemo} from '../adhoc/blog/castletypia.js'

<SimonSpriteDemo />
```

Never import canvas/WebGL/PIXI/Wasm modules directly in an MDX file; always go through an `adhoc/` loadable wrapper.

### Using UI components

React-Bootstrap, FontAwesome, and site Image component can be imported directly:

```mdx
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import Image from '../components/image.js'

<Image filename="coding.png" style={{width: '10rem'}} />
<FontAwesomeIcon icon={faGamepad} />
```

### Images in Markdown syntax

Relative image paths are processed by `gatsby-remark-images` (max 600px, lazy loaded, auto-captioned):

```md
![alt text](../images/blog/2023/my-image.png)
```

Image attributes can be set inline:

```md
![alt](../images/blog/2023/my-image.png#margin-left=auto;margin-right=auto;display=block)
```

### Code blocks

Fenced code blocks with PrismJS highlighting. Language aliases: `sh` → `bash`, `js` → `javascript`.

````md
```javascript
const x = 1
```
````

## Writing Style

When writing posts on behalf of the author, follow these patterns extracted from pre-2024 posts.

### Voice and Tone

- **Casual and direct** — write like talking to a smart friend, not a textbook
- **First person throughout** — "I", "my", "I found", "I learned"
- **Opinionated but humble** — state preferences clearly ("Rust is the right balance..."), then qualify ("but the learning curve is real")
- **Enthusiastic about tech** — use exclamations sparingly but naturally ("It's just that powerful!")
- **Self-aware** — acknowledge own mistakes, learning gaps, and frustrations openly

### Structure

Follow a loose **Problem → Journey → Solution → Reflection** arc:

1. **Hook**: Open with why the topic matters personally, a question, or a punchy statement — not a definition
2. **Sections with `##` headers**: Logical chunks; don't over-nest (avoid `####`)
3. **Code embedded with context**: Always explain *why* before showing code, rarely comment within it
4. **Trails off rather than concludes**: Posts often end with next steps, TODOs, or an open question — no formal conclusion paragraph

### Sentences and Paragraphs

- Mix short punchy sentences with longer explanatory ones for rhythm
- Keep paragraphs to 2–5 sentences; break into bullets when listing options or steps
- Use em-dashes for asides — like this — instead of parentheses

### Technical Content

- **Assume baseline knowledge** but explain the application/context
- **Use analogy freely**: "callback is like using a pager", game mechanics to explain architecture
- Introduce jargon once with brief context, then use freely afterwards
- Show **real, working code** — not sanitized pseudocode
- Prefer narrative between code blocks over inline comments

### Word Choice

Recurring positive descriptors: "nice", "cool", "awesome", "powerful" — use these naturally.
Common transition patterns:
- "Unfortunately..." — for setbacks
- "BTW" — for casual asides
- "To be honest..." — before candid opinions
- "After [learning/trying/reading] X..." — for personal journey framing
- "Just X and you are done!" — for simple solutions

Avoid flowery or academic language. Prefer "fix", "hack", "tweak" over "remediate", "implement", "optimize".

### Personal and Emotional Content

- Weave in family, hobbies, and life context naturally — it belongs alongside technical content
- Be vulnerable about struggles ("I burnt 30 pounds", "my September is just totally gone")
- Reference games, anime, and pop culture freely (Fallout, Dragon Ball, Final Fantasy)
- Emoji are fine for mood/emphasis 😄, but not every paragraph

### Language Mixing (English / Chinese)

- Chinese appears naturally for personal/introspective content and is never translated
- Code-switch without apology or explanation — assume the reader can follow
- Section headers can be in either language
- Don't force Chinese in; only use it where it feels natural to the author's voice

### Markdown Habits

- `##` and `###` for sections; `#` only for the rare top-level title within a post
- Bullet lists for options and parallel items; numbered lists for sequential steps
- Inline backticks for commands, filenames, and technical terms
- **Bold** sparingly for genuinely key concepts; italics almost never
- Links are inline and contextual — no bibliography or "References" section at the end
- Task lists (`- [ ]`) for TODOs within a post are fine

### Length

- Short posts are fine — don't pad
- Technical guides grow naturally long (2000–5000 words); follow the topic, not a target
- Code-heavy posts: length is driven by the code, not narrative

---

## Adding a New Blog Post

1. Create `src/posts/YYYY-MM-DD-my-slug.mdx`
2. Add frontmatter with at minimum: `category`, `title`, `date`, `visible`
3. Add a `titleImage` path if you have a representative image (put the image under `src/images/blog/YYYY/`)
4. Write content in Markdown/MDX below the frontmatter
5. Set `visible: 0` while drafting; flip to `visible: 1` to publish
