---
tag: GA5V8HTRKV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h470401
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35566
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/1999
    source: hf-ai-mo-aops
    label: 1999 China National Olympiad
---
Determine the maximum value of $\lambda$ such that if $f(x) = x^3 +ax^2 +bx+c$ is a cubic polynomial with all its roots nonnegative, then $$f(x)\geq\lambda(x -a)^3$$ for all $x\geq0$ . Find the equality condition.
