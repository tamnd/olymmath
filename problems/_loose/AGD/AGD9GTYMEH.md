---
tag: AGD9GTYMEH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585532
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11657
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
If
$$
\sum_{n=1}^{\infty}\frac{\frac11 + \frac12 + \dots + \frac 1n}{\binom{n+100}{100}} = \frac pq
$$
for relatively prime positive integers $p,q$ , find $p+q$ .

*Proposed by Michael Kural*
