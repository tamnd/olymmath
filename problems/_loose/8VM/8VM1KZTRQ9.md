---
tag: 8VM1KZTRQ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560344
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10100
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212096
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
Ben has a big blackboard, initially empty, and Francisco has a fair coin. Francisco flips the coin $2013$ times. On the $n^{\text{th}}$ flip (where $n=1,2,\dots,2013$ ), Ben does the following if the coin flips heads:
(i) If the blackboard is empty, Ben writes $n$ on the blackboard.
(ii) If the blackboard is not empty, let $m$ denote the largest number on the blackboard. If $m^2+2n^2$ is divisible by $3$ , Ben erases $m$ from the blackboard; otherwise, he writes the number $n$ .
No action is taken when the coin flips tails. If probability that the blackboard is empty after all $2013$ flips is $\frac{2u+1}{2^k(2v+1)}$ , where $u$ , $v$ , and $k$ are nonnegative integers, compute $k$ .

*Proposed by Evan Chen*
