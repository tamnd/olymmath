---
tag: 3XYHQCTW4V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1918651
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2017
    source: hf-ai-mo-aops
    label: 2017 Princeton University Math Competition
---
Robert is a robot who can move freely on the unit circle and its interior, but is attached to the origin by a retractable cord such that at any moment the cord lies in a straight line on the ground connecting Robert to the origin. Whenever his movement is counterclockwise (relative to the origin), the cord leaves a coating of black paint on the ground, and whenever his movement is clockwise, the cord leaves a coating of orange paint on the ground. The paint is dispensed regardless of whether there is already paint on the ground. The paints covers $1$ gallon/unit $^2$ , and Robert starts at $(1, 0)$ . Each second, he moves in a straight line from the point $(\cos(\theta),\sin(\theta))$ to the point $(\cos(\theta+a),\sin(\theta+a))$ , where a changes after each movement. a starts out as $253^o$ and decreases by $2^o$ each step. If he takes $89$ steps, then the difference, in gallons, between the amount of black paint used and orange paint used can be written as $\frac{\sqrt{a}- \sqrt{b}}{c} \cot 1^o$ , where $a, b$ and $c$ are positive integers and no prime divisor of $c$ divides both $a$ and $b$ twice. Find $a + b + c$ .
