---
tag: SVAKD1QCS2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516629
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10051
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
For a permutation $\pi$ of the integers from 1 to 10, define
$$ S(\pi) = \sum_{i=1}^{9} (\pi(i) - \pi(i+1))\cdot (4 + \pi(i) + \pi(i+1)), $$
where $\pi (i)$ denotes the $i$ th element of the permutation. Suppose that $M$ is the maximum possible value of $S(\pi)$ over all permutations $\pi$ of the integers from 1 to 10. Determine the number of permutations $\pi$ for which $S(\pi) = M$ .

*Ray Li*
