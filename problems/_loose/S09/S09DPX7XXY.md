---
tag: S09DPX7XXY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the Flatland Congress there are senators who are on committees. Each senator is on at least one committee, and each committee has at least one senator. The rules for forming committees are as follows:

$\bullet$ For any pair of senators, there is exactly one committee which contains both senators.
$\bullet$ For any two committees, there is exactly one senator who is on both committees.
$\bullet$ There exist a set of four senators, no three of whom are all on the same committee.
$\bullet$ There exists a committee with exactly $6$ senators.

If there are at least $25$ senators in this Congress, compute the minimum possible number of senators $s$ and minimum number of committees $c$ in this Congress. Express your answer in the form $(s, c)$.
