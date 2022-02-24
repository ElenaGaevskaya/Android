package com.example.workingnotifications;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class NActivity3 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_nactivity3);
        setContentView(R.layout.activity_nactivity2);
        TextView textView = findViewById(R.id.textView);
        textView.setText("Act3");
    }
}