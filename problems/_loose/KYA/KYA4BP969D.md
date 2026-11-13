---
tag: KYA4BP969D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2016
    url: https://artofproblemsolving.com/community/c6h3056225
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57173
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2016
    source: hf-ai-mo-aops
    label: Russian TST 2016
---
Several people came to the congress, each of whom has a certain number of tattoos on both hands. There are $n{}$ types of tattoos, and each of the $n{}$ types is found on the hands of at least $k{}$ people. For which pairs $(n, k)$ is it always possible for each participant to raise one of their hands so that all $n{}$ types of tattoos are present on the raised hands?
