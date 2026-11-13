---
tag: PSXMM91S0Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Azerbaijan Senior NMO
    url: https://artofproblemsolving.com/community/c6h3141749
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30774
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: az-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Azerbaijan Senior NMO
---
To open the magic chest, one needs to say a magic code of length $n$ consisting of digits $0, 1, 2, 3, 4, 5, 6, 7, 8, 9.$ Each time Griphook tells the chest a code it thinks up, the chest's talkative guardian responds by saying the number of digits in that code that match the magic code. (For example, if the magic code is $0423$ and Griphook says $3442,$ the chest's talkative guard will say $1$ ). Prove that there exists a number $k$ such that for any natural number $n \geq k,$ Griphook can find the magic code by checking at most $4n-2023$ times, regardless of what the magic code of the box is.
