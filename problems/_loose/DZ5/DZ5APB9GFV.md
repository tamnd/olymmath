---
tag: DZ5APB9GFV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h3437308
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2024
    source: hf-ai-mo-aops
    label: 2024 Belarusian National Olympiad
---
Let $S$ be the set of all non-increasing sequences of numbers $a_1 \geq a_2 \geq \ldots \geq a_{101}$ such that $a_i \in \{ 0,1,\ldots ,101 \}$ for all $1 \leq i \leq 101$ For every sequence $s \in S$ let $$ f(s)=\lceil \frac{a_1}{2} \rceil+\lfloor \frac{a_2}{2} \rfloor + \lceil \frac{a_3}{2} \rceil + \ldots + \lfloor \frac{a_{100}}{2} \rfloor + \lceil \frac{a_{101}}{2} \rceil $$ where $\lfloor x \rfloor$ is the greatest integer, not exceeding $x$ , and $\lceil x \rceil$ is the least integer at least $x$ .
Prove that the number of sequences $s \in S$ for which $f(s)$ is even is the same, as the number of sequences $s$ for which $f(s)$ is odd
*M. Zorka*
