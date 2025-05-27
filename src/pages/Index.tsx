
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Settings, Wallet, Search, Clock, DollarSign, Zap, TrendingDown, Coins, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const Index = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFindRoute = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  const handleMaxClick = () => {
    setFromAmount("1250.00");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23e2e8f0\" fill-opacity=\"0.3\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Header */}
      <header className="relative border-b border-slate-200/60 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">GasGuard</h1>
                <p className="text-sm text-slate-600 font-medium">Smart Cross-Chain Swaps</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white shadow-lg border-0">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-2xl mx-auto px-4 py-8">
        {/* Swap Interface */}
        <Card className="bg-white/95 backdrop-blur-md border-slate-200/60 shadow-2xl shadow-slate-200/50">
          <CardHeader className="pb-6">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-slate-900 text-2xl font-bold">Cross-Chain Swap</CardTitle>
                <p className="text-slate-600 text-sm mt-1">Find the most cost-effective route</p>
              </div>
              <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-700 hover:bg-slate-100">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* From Section */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-700 flex items-center">
                <Coins className="w-4 h-4 mr-2" />
                From
              </label>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="bg-slate-50/80 border-slate-300 hover:bg-slate-100/80 transition-colors">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-2"></div>
                      <SelectValue placeholder="Source Chain" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-2"></div>
                        Ethereum
                      </div>
                    </SelectItem>
                    <SelectItem value="polygon">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mr-2"></div>
                        Polygon
                      </div>
                    </SelectItem>
                    <SelectItem value="bsc">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mr-2"></div>
                        BSC
                      </div>
                    </SelectItem>
                    <SelectItem value="arbitrum">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-2"></div>
                        Arbitrum
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-slate-50/80 border-slate-300 hover:bg-slate-100/80 transition-colors">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-2"></div>
                      <SelectValue placeholder="Token" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usdc">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-2"></div>
                        USDC
                      </div>
                    </SelectItem>
                    <SelectItem value="usdt">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-2"></div>
                        USDT
                      </div>
                    </SelectItem>
                    <SelectItem value="eth">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mr-2"></div>
                        ETH
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="text-2xl font-bold bg-slate-50/80 border-slate-300 h-16 pr-20 text-slate-900"
                  />
                  <Button
                    onClick={handleMaxClick}
                    variant="outline"
                    size="sm"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                  >
                    MAX
                  </Button>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-slate-600">Balance: 1,250.00 USDC</p>
                  <p className="text-slate-600">~${fromAmount || "0.00"} USD</p>
                </div>
              </div>
            </div>

            {/* Swap Arrow */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="icon"
                className="bg-white border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 shadow-lg h-12 w-12"
              >
                <ArrowUpDown className="w-5 h-5 text-emerald-600" />
              </Button>
            </div>

            {/* To Section */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-700 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                To
              </label>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="bg-slate-50/80 border-slate-300 hover:bg-slate-100/80 transition-colors">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mr-2"></div>
                      <SelectValue placeholder="Destination Chain" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="polygon">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mr-2"></div>
                        Polygon
                      </div>
                    </SelectItem>
                    <SelectItem value="ethereum">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-2"></div>
                        Ethereum
                      </div>
                    </SelectItem>
                    <SelectItem value="bsc">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mr-2"></div>
                        BSC
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-slate-50/80 border-slate-300 hover:bg-slate-100/80 transition-colors">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-2"></div>
                      <SelectValue placeholder="Token" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usdc">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-2"></div>
                        USDC
                      </div>
                    </SelectItem>
                    <SelectItem value="usdt">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-2"></div>
                        USDT
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 border border-slate-200 rounded-xl p-4">
                <p className="text-3xl font-bold text-slate-900 mb-1">
                  {fromAmount ? `~${(parseFloat(fromAmount) * 0.997).toFixed(2)}` : "0.00"}
                </p>
                <p className="text-sm text-slate-600">Estimated receive amount</p>
              </div>
            </div>

            {/* Find Route Button */}
            <Button 
              onClick={handleFindRoute}
              className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white h-14 text-lg font-bold shadow-lg shadow-emerald-200/50 transition-all duration-200"
              disabled={!fromAmount || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing Routes...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Find Best Route
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Loading State */}
        {isLoading && (
          <div className="mt-8 space-y-4 animate-fade-in">
            <Card className="bg-white/95 backdrop-blur-md border-slate-200/60 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-3">
                  <Loader2 className="w-6 h-6 animate-spin text-emerald-600" />
                  <p className="text-slate-700 font-medium">Scanning 15+ bridges for optimal routes...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Results Section */}
        {showResults && !isLoading && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Route Analysis</h2>
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                3 Routes Found
              </Badge>
            </div>
            
            {/* Recommended Route */}
            <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200 shadow-xl shadow-emerald-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-emerald-400 text-white px-4 py-1 text-sm font-bold">
                BEST VALUE
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-emerald-800 flex items-center text-xl">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mr-3 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    Recommended Route
                  </CardTitle>
                </div>
                <p className="text-emerald-700 font-medium">via Stargate Finance</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* You Receive - Prominent Display */}
                <div className="bg-white/80 rounded-xl p-6 border border-emerald-200">
                  <div className="text-center space-y-2">
                    <p className="text-sm text-slate-600 font-medium">You Receive</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      {fromAmount ? (parseFloat(fromAmount) * 0.997).toFixed(2) : "0.00"} USDC
                    </p>
                    <p className="text-lg text-slate-700">
                      ~${fromAmount ? (parseFloat(fromAmount) * 0.997).toFixed(2) : "0.00"} USD
                    </p>
                  </div>
                </div>
                
                {/* Cost Breakdown */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-lg p-4 space-y-2">
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Est. Time
                    </div>
                    <p className="text-lg font-bold text-slate-900">2-5 min</p>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-4 space-y-2">
                    <div className="flex items-center text-sm text-slate-600">
                      <TrendingDown className="w-4 h-4 mr-2" />
                      Price Impact
                    </div>
                    <p className="text-lg font-bold text-green-600">0.1%</p>
                  </div>
                </div>
                
                {/* Detailed Cost Breakdown */}
                <div className="bg-white/80 rounded-xl p-4 space-y-3 border border-slate-200">
                  <h4 className="font-semibold text-slate-800 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Cost Breakdown
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Network Fee (Gas)</span>
                      <div className="text-right">
                        <span className="text-slate-900 font-medium">0.003 ETH</span>
                        <p className="text-xs text-slate-500">~$7.20</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Bridge Fee</span>
                      <span className="text-slate-900 font-medium">$2.50</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-medium">
                      <span className="text-slate-700">Total Cost</span>
                      <span className="text-slate-900">$9.70</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between text-lg font-bold">
                      <span className="text-emerald-700">Net Value Delivered</span>
                      <span className="text-emerald-600">${fromAmount ? (parseFloat(fromAmount) - 9.70).toFixed(2) : "0.00"}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Routes */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Other Route Options</h3>
              
              {/* Alternative Route 1 */}
              <Card className="bg-white/95 backdrop-blur-md border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mr-3"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Hop Protocol</h4>
                        <p className="text-sm text-slate-600">5-10 minutes</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-slate-600 border-slate-300">
                      Select Route
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600">You Receive</p>
                      <p className="font-bold text-slate-900">
                        {fromAmount ? (parseFloat(fromAmount) * 0.995).toFixed(2) : "0.00"} USDC
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600">Total Cost</p>
                      <p className="font-bold text-slate-900">$12.30</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Net Value</p>
                      <p className="font-bold text-slate-900">
                        ${fromAmount ? (parseFloat(fromAmount) - 12.30).toFixed(2) : "0.00"}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600">Savings vs Best</p>
                      <p className="font-bold text-red-600">-$2.60</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Route 2 */}
              <Card className="bg-white/95 backdrop-blur-md border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mr-3"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Across Protocol</h4>
                        <p className="text-sm text-slate-600">3-7 minutes</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-slate-600 border-slate-300">
                      Select Route
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600">You Receive</p>
                      <p className="font-bold text-slate-900">
                        {fromAmount ? (parseFloat(fromAmount) * 0.993).toFixed(2) : "0.00"} USDC
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600">Total Cost</p>
                      <p className="font-bold text-slate-900">$15.80</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Net Value</p>
                      <p className="font-bold text-slate-900">
                        ${fromAmount ? (parseFloat(fromAmount) - 15.80).toFixed(2) : "0.00"}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600">Savings vs Best</p>
                      <p className="font-bold text-red-600">-$6.10</p>
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
