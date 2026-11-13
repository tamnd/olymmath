---
tag: 4CBGKQMQAM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The names of $10$ people are inside $10$ boxes. Each box is labeled with someone's name. Unfortunately, there was a mix-up and not everyone's name is in his or her own box. Each person looks through $5$ boxes in the following way. First, they look in their own box. After looking in a box, they look at the box labeled with the name they found in the previous box. (For example, if someone looks in a box and finds the name "Joe," he or she will then look at the box labeled "Joe.")

What is the probability that every person finds his or her own name in a box?
