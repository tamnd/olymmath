---
tag: TA0A1Z5E4P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h1622915
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16925
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-ai-mo-aops
    label: 2018 Romania National Olympiad
---
Let $f:[a,b] \to \mathbb{R}$ be an integrable function and $(a_n) \subset \mathbb{R}$ such that $a_n \to 0.$ $\textbf{a) }$ If $A= \{m \cdot a_n \mid m,n \in \mathbb{N}^* \},$ prove that every open interval of strictly positive real numbers contains elements from $A.$ $\textbf{b) }$ If, for any $n \in \mathbb{N}^*$ and for any $x,y \in [a,b]$ with $|x-y|=a_n,$ the inequality $\left| \int_x^yf(t)dt \right| \leq |x-y|$ is true, prove that $$ \left| \int_x^y f(t)dt \right| \leq |x-y|, \: \forall x,y \in [a,b] $$ *Nicolae Bourbacut*
