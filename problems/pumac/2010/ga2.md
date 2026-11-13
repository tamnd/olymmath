---
tag: M57PW7YQXZ
kind: problem
appearances:
  - at: pumac/2010/ga2
    primary: true
  - at: pumac/2010/gb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h425965
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5463
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a rectangular plot of land, a man walks in a very peculiar fashion. Labeling the corners $ABCD$ , he starts at $A$ and walks to $C$ . Then, he walks to the midpoint of side $AD$ , say $A_1$ . Then, he walks to the midpoint of side $CD$ say $C_1$ , and then the midpoint of $A_1D$ which is $A_2$ . He continues in this fashion, indefinitely. The total length of his path if $AB=5$ and $BC=12$ is of the form $a + b\sqrt{c}$ . Find $ \frac{abc}{4}$ .
