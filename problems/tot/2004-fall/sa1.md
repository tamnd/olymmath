---
tag: ENN6A1460V
kind: problem
appearances:
  - at: tot/2004-fall/sa1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65562
    url: https://problems.ru/view_problem_details_new.php?id=65562
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
    url: https://artofproblemsolving.com/community/c6h21853p140842
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228730
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Functions f and g are defined on the whole real line and are mutually inverse: g(f(x))=x, f(g(y))=y for all x, y. It is known that f can be written as a sum of periodic and linear functions: f(x)=kx+h(x) for some number k and a periodic function h(x). Show that g can also be written as a sum of periodic and linear functions. (A functions h(x) is called periodic if there exists a non-zero number d such that h(x+d)=h(x) for any x.)
