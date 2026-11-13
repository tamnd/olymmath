---
tag: NW60H85GXD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h517886
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9942
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211938
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
Tom has a scientific calculator. Unfortunately, all keys are broken except for one row: 1, 2, 3, + and -.
Tom presses a sequence of $5$ random keystrokes; at each stroke, each key is equally likely to be pressed. The calculator then evaluates the entire expression, yielding a result of $E$ . Find the expected value of $E$ .
(Note: Negative numbers are permitted, so 13-22 gives $E = -9$ . Any excess operators are parsed as signs, so -2-+3 gives $E=-5$ and -+-31 gives $E = 31$ . Trailing operators are discarded, so 2++-+ gives $E=2$ . A string consisting only of operators, such as -++-+, gives $E=0$ .)

*Proposed by Lewis Chen*
