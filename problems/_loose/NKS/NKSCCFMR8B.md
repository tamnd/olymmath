---
tag: NKSCCFMR8B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 AMC 10
    url: https://artofproblemsolving.com/community/c6h1781097
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17235
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140471
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2019 AMC 10
---
Let $p$ , $q$ , and $r$ be the distinct roots of the polynomial $x^3 - 22x^2 + 80x - 67$ . It is given that there exist real numbers $A$ , $B$ , and $C$ such that $$\dfrac{1}{s^3 - 22s^2 + 80s - 67} = \dfrac{A}{s-p} + \dfrac{B}{s-q} + \frac{C}{s-r}$$ for all $s\not\in\{p,q,r\}$ . What is $\tfrac1A+\tfrac1B+\tfrac1C$ ? $\textbf{(A) }243 \textbf{(B) }244 \textbf{(C) }245 \textbf{(D) }246 \textbf{(E) } 247$
