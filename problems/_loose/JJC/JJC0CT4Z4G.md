---
tag: JJC0CT4Z4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h53054
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42216
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2004
    source: hf-ai-mo-aops
    label: 2004 India IMO Training Camp
---
Let $ABC$ be a triangle and $I$ its incentre. Let $\varrho_1$ and $\varrho_2$ be the inradii of triangles $IAB$ and $IAC$ respectively.
(a) Show that there exists a function $f: ( 0, \pi ) \mapsto \mathbb{R}$ such that $$ \frac{ \varrho_1}{ \varrho_2} = \frac{f(C)}{f(B)} $$ where $B = \angle ABC$ and $C = \angle BCA$
(b) Prove that $$ 2 ( \sqrt{2} -1 ) < \frac{ \varrho_1} { \varrho_2} < \frac{ 1 + \sqrt{2}}{2} $$
