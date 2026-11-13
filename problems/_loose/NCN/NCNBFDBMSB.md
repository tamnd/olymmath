---
tag: NCNBFDBMSB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560347
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10103
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $P(t) = t^3+27t^2+199t+432$ . Suppose $a$ , $b$ , $c$ , and $x$ are distinct positive reals such that $P(-a)=P(-b)=P(-c)=0$ , and $$
\sqrt{\frac{a+b+c}{x}} = \sqrt{\frac{b+c+x}{a}} + \sqrt{\frac{c+a+x}{b}} + \sqrt{\frac{a+b+x}{c}}. $$ If $x=\frac{m}{n}$ for relatively prime positive integers $m$ and $n$ , compute $m+n$ .

*Proposed by Evan Chen*
