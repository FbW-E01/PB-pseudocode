# Inputs and Outputs

Write down pseudo-code on pen and paper for the following patterns:

1.
Input   =>	Output
2, 5	  =>  5
0, 100	=>  100
52, 35	=>  52

2.
Input	   =>   Output
5, 5     =>   true
40, 40   =>   true
50, 51   =>   false

3.
Input	     =>   Output
110, 100	 =>   true
150, 100	 =>   true
50, 100	   =>   false


Answers:

1.

function max(a, b) {
    if a > b then return a
    return b
}

2.

function equal(a, b) {
    if a == b then return true
    return false
}

3.

function isGreater(a, b) {
    if a > b then return true
    return false
}