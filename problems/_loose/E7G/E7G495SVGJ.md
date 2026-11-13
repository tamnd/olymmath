---
tag: E7G495SVGJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077894
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78503
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
A classroom has $30$ students, each of whom is either male or female. For every student $S$ , we define his or her *ratio* to be the number of students of the opposite gender as $S$ divided by the number of students of the same gender as $S$ (including $S$ ). Let $\Sigma$ denote the sum of the ratios of all $30$ students. Find the number of possible values of $\Sigma$ .

*Proposed by Evan Chen*
