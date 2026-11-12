---
tag: TDKGZZ2V9R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Maximum 10 points

In the Dark Dungeon, 1000 kind gnomes are held captive by 100 orcs. The chief orc has devised a scheme: orcs are assigned numbers from 00 to 99, and gnomes are assigned numbers from 000 to 999. An orc is assigned to watch a gnome if the orc's number can be obtained by deleting one digit from the gnome's number (for example, the orc with the number 14 watches the gnome with the number 146, as well as the orcs with the numbers 16 and 46).

The chief orc claims that only 50 orcs are needed to watch the gnomes, and that every gnome will still be watched by at least one orc. The rest of the orcs should be sent to conquer new cities.

a) Is the chief orc correct, and will 50 orcs be enough to ensure that no gnome goes unnoticed if they try to escape? Justify your answer.

b) If the answer to the first question is "Yes," is it possible to free more orcs? If the answer to the first question is "No," is it possible to reduce the number of orcs watching the gnomes at all? Justify your answer.
