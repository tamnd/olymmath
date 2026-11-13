---
tag: 6K2JZCD9NJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h152702
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54592
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248093
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2007
    source: hf-ai-mo-aops
    label: 2007 Romania Team Selection Test
---
The world-renowned Marxist theorist *Joric* is obsessed with both mathematics and social egalitarianism. Therefore, for any decimal representation of a positive integer $n$ , he tries to partition its digits into two groups, such that the difference between the sums of the digits in each group be as small as possible. Joric calls this difference the *defect* of the number $n$ . Determine the average value of the defect (over all positive integers), that is, if we denote by $\delta(n)$ the defect of $n$ , compute $$\lim_{n \rightarrow \infty}\frac{\sum_{k = 1}^{n}\delta(k)}{n}.$$
*Iurie Boreico*
