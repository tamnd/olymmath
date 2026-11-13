---
tag: ZDPH9DGNSE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h528391
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66811
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=201831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
Let $t_n=\dfrac{n(n+1)}2$ be the $n$ th triangular number. Find
$$\dfrac1{t_1}+\dfrac1{t_2}+\dfrac1{t_3}+\cdots+\dfrac1{t_{2002}}.$$ $\textbf{(A) }\dfrac{4003}{2003} \textbf{(B) }\dfrac{2001}{1001} \textbf{(C) }\dfrac{4004}{2003} \textbf{(D) }\dfrac{4001}{2001} \textbf{(E) }2$
