---
tag: WWS72Y3HKH
kind: problem
type: answer
answer: Minimum guesses = 1 if k ≠ n/2; minimum guesses = 2 if k = n/2.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=345
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Der brasilianische IMO-Leader wählt zwei natürliche Zahlen $n$ und $k$ mit $n>k$, und sagt diese dann seinem Deputy und einem Teilnehmer. Dann flüstert der Leader dem Deputy eine binäre Folge der Länge $n$ ins Ohr. Der Deputy schreibt alle binären Folgen der Länge $n$ auf, die sich genau an $k$ Stellen von der Folge des Leaders unterscheiden. (Beispiel für $n=3$ und $k=1$: Wenn der Leader 101 wählt, schreibt der Deputy 001, 100, 111 auf.) Der Teilnehmer schaut sich die Folgen an, die der Deputy aufgeschrieben hat. Nun versucht der Teilnehmer, die ursprüngliche Folge vom Leader herauszufinden.
Wie viele Male muss er mindestens raten (abhängig von $n$ und $k$), bis er sicher einmal korrekt geraten hat?
