---
tag: XHNZT1D1YW
kind: problem
appearances:
  - at: tot/2005-fall/ja4
    primary: true
  - at: tot/2005-fall/sa2
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65826
    url: https://problems.ru/view_problem_details_new.php?id=65826
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
    url: https://artofproblemsolving.com/community/c6h1069954p4649036
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two ants crawl along the perimeter of a polygonal table, so that the distance between them is always $10$ cm. Each side of the table is more than $1$ meter long. At the initial moment both ants are on the same side of the table.

(a) *(2 points)* Suppose that the table is a convex polygon. Is it always true that both ants can visit each point on the perimeter?

(b) *(4 points)* Is it always true (this time without assumption of convexity) that each point on the perimeter can be visited by at least one ant?
