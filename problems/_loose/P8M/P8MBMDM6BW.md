---
tag: P8MBMDM6BW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h606429
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11615
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Let $S = \left\{ 1,2, \dots, 2014 \right\}$ . Suppose that $$ \sum_{T \subseteq S} i^{\left\lvert T \right\rvert} = p + qi $$ where $p$ and $q$ are integers, $i = \sqrt{-1}$ , and the summation runs over all $2^{2014}$ subsets of $S$ . Find the remainder when $\left\lvert p\right\rvert + \left\lvert q \right\rvert$ is divided by $1000$ . (Here $\left\lvert X \right\rvert$ denotes the number of elements in a set $X$ .)

*Proposed by David Altizio*
