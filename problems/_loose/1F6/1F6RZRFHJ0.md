---
tag: 1F6RZRFHJ0
kind: problem
type: answer
answer: \sqrt{398}<20
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Intern's Mistake (from 8th grade, 3 points). At a bakery, a dosing machine measures out portions of dough weighing 400 g. The rule is: if the standard deviation of ten random measurements exceeds 5% of the nominal portion mass, the machine requires repair.

To check the machine, young intern Ivanov weighed 10 random portions dispensed by the machine, with an accuracy of one gram, and recorded in the table how many grams the portions differ from the nominal mass of 400 g, either way.

| Portion Number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Deviation from 400 g | 12 | 32 | 18 | 19 | 28 | 15 | 7 | 22 | 12 | 21 |

Young engineer Petrov got angry and said that all the work was in vain, since the signs of the deviations are unknown, and he cannot calculate either the standard deviation or even the arithmetic mean.

Experienced master Sidorov just shook his head and said that everything was not so bad. Of course, finding the standard deviation is impossible, but it can be mathematically proven that the machine does not require repair. How could Master Sidorov have reasoned?
