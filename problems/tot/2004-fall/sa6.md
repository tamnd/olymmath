---
tag: 9R3BW93CBV
kind: problem
appearances:
  - at: tot/2004-fall/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65565
    url: https://problems.ru/view_problem_details_new.php?id=65565
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
    url: https://artofproblemsolving.com/community/c6h21857p140854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let n be a fixed prime number >3. A triangle is said to be admissible if the measure of each of its angles is of the form $\frac{m\cdot 180^{\circ}}{n}$ for some positive integer m.
We are given one admissible triangle. Every minute we cut one of the triangles we already have into two admissible triangles so that no two of the triangles we have after cutting are similar. After some time, it turns out that no more cuttings are possible. Prove that at this moment, the triangles we have contain all possible admissible triangles (we do not distinguish between triangles which have same sets of angles, i.e. similar triangles).
