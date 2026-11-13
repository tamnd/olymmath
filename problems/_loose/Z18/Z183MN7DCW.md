---
tag: Z183MN7DCW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h500640
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8480
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Suppose 2012 reals are selected independently and at random from the unit interval $[0,1]$ , and then written in nondecreasing order as $x_1\le x_2\le\cdots\le x_{2012}$ . If the probability that $x_{i+1} - x_i \le \frac{1}{2011}$ for $i=1,2,\ldots,2011$ can be expressed in the form $\frac{m}{n}$ for relatively prime positive integers $m,n$ , find the remainder when $m+n$ is divided by 1000.

*Victor Wang.*
