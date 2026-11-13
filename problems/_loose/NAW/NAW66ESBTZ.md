---
tag: NAW66ESBTZ
kind: problem
type: answer
answer: C,B,E,D,A,F
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The FDJ members Arnim, Bertram, Christian, Dieter, Ernst, and Fritz participated in a 400-meter race. No two of them finished at the same time.

Before the race, the following three predictions were made about the results (each participant is represented by the first letter of their first name):

| Place | 1. | 2. | 3. | 4. | 5. | 6. |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| 1st Prediction | A | B | C | D | E | F |
| 2nd Prediction | A | C | B | F | E | D |
| 3rd Prediction | C | E | F | A | D | B |

After the race, it turned out that in the first prediction, the places of exactly three runners were correctly given. No two of these three places were adjacent to each other. In the second prediction, no runner's place was correctly given. In the third prediction, the place of one runner was correctly given.

Give all possible sequences of the places achieved by the runners under these conditions!
