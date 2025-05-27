
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Settings, Wallet, RefreshCw, Clock, DollarSign, Zap } from "lucide-react";

const Index = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleFindRoute = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">GasGuard Swap</h1>
            </div>
            <Button variant="outline" className="bg-white border-slate-300 hover:bg-slate-50">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Swap Interface */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200 shadow-xl">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-slate-900">Cross-Chain Swap</CardTitle>
              <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-700">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* From Section */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-700">From</label>
              <div className="grid grid-cols-2 gap-3">
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-300">
                    <SelectValue placeholder="Source Chain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="bsc">BSC</SelectItem>
                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-300">
                    <SelectValue placeholder="Token" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usdc">USDC</SelectItem>
                    <SelectItem value="usdt">USDT</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="matic">MATIC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="text-2xl font-semibold bg-slate-50 border-slate-300 h-14"
                />
                <p className="text-sm text-slate-500">Balance: 1,250.00 USDC</p>
              </div>
            </div>

            {/* Swap Arrow */}
            <div className="flex justify-center">
              <div className="bg-slate-100 p-2 rounded-full border border-slate-300">
                <ArrowDown className="w-5 h-5 text-slate-600" />
              </div>
            </div>

            {/* To Section */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-700">To</label>
              <div className="grid grid-cols-2 gap-3">
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-300">
                    <SelectValue placeholder="Destination Chain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="bsc">BSC</SelectItem>
                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-300">
                    <SelectValue placeholder="Token" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usdc">USDC</SelectItem>
                    <SelectItem value="usdt">USDT</SelectItem>
                    <SelectItem value="matic">MATIC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-slate-50 border border-slate-300 rounded-lg p-4">
                <p className="text-2xl font-semibold text-slate-900">
                  {fromAmount ? `~${(parseFloat(fromAmount) * 0.997).toFixed(2)}` : "0.00"}
                </p>
                <p className="text-sm text-slate-500">Estimated receive amount</p>
              </div>
            </div>

            {/* Find Route Button */}
            <Button 
              onClick={handleFindRoute}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-12 text-lg font-semibold"
              disabled={!fromAmount}
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Find Best Route
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        {showResults && (
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Route Recommendations</h2>
            
            {/* Best Route */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Best Route Recommendation
                  </CardTitle>
                  <Badge className="bg-green-600 text-white">Optimal</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/80 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">Bridge</span>
                    <span className="font-semibold text-slate-900">Stargate Finance</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">You Receive</p>
                      <p className="text-xl font-bold text-green-600">
                        {fromAmount ? (parseFloat(fromAmount) * 0.997).toFixed(2) : "0.00"} USDC
                      </p>
                      <p className="text-sm text-slate-500">
                        ~${fromAmount ? (parseFloat(fromAmount) * 0.997).toFixed(2) : "0.00"} USD
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Estimated Time
                      </p>
                      <p className="text-lg font-semibold text-slate-900">2-5 minutes</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Network Fee (Gas)</span>
                      <span className="text-slate-900">0.003 ETH (~$7.20)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Bridge Fee</span>
                      <span className="text-slate-900">$2.50</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium border-t pt-2">
                      <span className="text-slate-700">Total Cost</span>
                      <span className="text-slate-900">$9.70</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-green-600">
                      <span>Net Value Received</span>
                      <span>${fromAmount ? (parseFloat(fromAmount) - 9.70).toFixed(2) : "0.00"}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Routes */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Alternative Routes</h3>
              
              <Card className="bg-white border-slate-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-slate-900">Hop Protocol</h4>
                      <p className="text-sm text-slate-600">5-10 minutes</p>
                    </div>
                    <Badge variant="secondary">Alternative</Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600">You Receive</p>
                      <p className="font-semibold text-slate-900">
                        {fromAmount ? (parseFloat(fromAmount) * 0.995).toFixed(2) : "0.00"} USDC
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600">Total Cost</p>
                      <p className="font-semibold text-slate-900">$12.30</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Net Value</p>
                      <p className="font-semibold text-slate-900">
                        ${fromAmount ? (parseFloat(fromAmount) - 12.30).toFixed(2) : "0.00"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-slate-900">Across Protocol</h4>
                      <p className="text-sm text-slate-600">3-7 minutes</p>
                    </div>
                    <Badge variant="secondary">Alternative</Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600">You Receive</p>
                      <p className="font-semibold text-slate-900">
                        {fromAmount ? (parseFloat(fromAmount) * 0.993).toFixed(2) : "0.00"} USDC
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600">Total Cost</p>
                      <p className="font-semibold text-slate-900">$15.80</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Net Value</p>
                      <p className="font-semibold text-slate-900">
                        ${fromAmount ? (parseFloat(fromAmount) - 15.80).toFixed(2) : "0.00"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
