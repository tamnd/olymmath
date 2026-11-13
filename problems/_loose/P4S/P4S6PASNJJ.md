---
tag: P4S6PASNJJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h500632
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8473
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210537
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
Find the number of integers $a$ with $1\le a\le 2012$ for which there exist nonnegative integers $x,y,z$ satisfying the equation
$$x^2(x^2+2z) - y^2(y^2+2z)=a.$$

*Ray Li.*
