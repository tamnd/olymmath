---
tag: 328VBKEXRT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h565601
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10015
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
In a certain game, Auntie Hall has four boxes $B_1$ , $B_2$ , $B_3$ , $B_4$ , exactly one of which contains a valuable gemstone; the other three contain cups of yogurt. You are told the probability the gemstone lies in box $B_n$ is $\frac{n}{10}$ for $n=1,2,3,4$ .

Initially you may select any of the four boxes; Auntie Hall then opens one of the other three boxes at random (which may contain the gemstone) and reveals its contents. Afterwards, you may change your selection to any of the four boxes, and you win if and only if your final selection contains the gemstone. Let the probability of winning assuming optimal play be $\tfrac mn$ , where $m$ and $n$ are relatively prime integers. Compute $100m+n$ .

*Proposed by Evan Chen*
