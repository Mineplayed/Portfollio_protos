from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def redirect_home():
    return redirect("/home")
    
    
@app.route("/home")
def render_home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)