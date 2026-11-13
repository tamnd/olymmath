---
tag: 2AZHS00W2F
kind: problem
appearances:
  - at: tot/2007-fall/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 64592
    url: https://problems.ru/view_problem_details_new.php?id=64592
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: AI-MO AoPS
    url: https://huggingface.co/datasets/project-numina/aops
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-aops-wiki
    name: AoPS wiki problems
    url: https://artofproblemsolving.com/community/c6h428701p2426222
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P$ and $Q$ be two convex polygons. Let $h$ be the length of the projection of $Q$ onto a line perpendicular to a side of $P$ which is of length $p$ . Define $f(P,Q)$ to be the sum of the products $hp$ over all sides of $P$ . Prove that $f(P,Q) = f(Q, P)$ .
