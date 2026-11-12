---
tag: PXWVWJQ5Z4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33450
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
("Matching Problem".) Suppose there are $n$ letters and $n$ envelopes. The letters are placed into the envelopes "randomly," meaning that the assignment of probabilities is done according to the "classical" method of defining probabilities. Let $P_{(m)}$ be the probability that exactly $m$ letters end up in their "correct" envelopes.

Show that

$$
P_{(m)}=\frac{1}{m!}\left(1+\sum_{j=1}^{n-m} \frac{(-1)^{j}}{j!}\right)
$$
